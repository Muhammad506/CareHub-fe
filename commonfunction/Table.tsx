'use client'
import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

// Define types for props
interface TableProps {
  data: any[];
  columns: any[];
  maxHeight?: string;
  totalCount: number;
  isShowPagination?: boolean;
  getPaginationChangeValue: (pageIndex: number, pageSize: number) => void;
  setPagination: (pagination: any) => void;
  pagination: any;
  exportTo?: boolean;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  maxHeight,
  totalCount = 0,
  isShowPagination = true,
  getPaginationChangeValue,
  setPagination,
  pagination,
  exportTo = false,
}) => {
  const [sorting, setSorting] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPageRow, setPerPageRow] = useState<string>("10");
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const [currentPageGroup, setCurrentPageGroup] = useState<number>(0);

  useEffect(() => {
    if (isShowPagination) {
      const pageSizeVal = perPageRow ? parseInt(perPageRow) : 5;
      if (!isNaN(totalCount) && totalCount > 0 && pageSizeVal > 0) {
        const pages = Math.ceil(totalCount / pageSizeVal);
        if (pages > 0) {
          const result = Array(pages).fill(pageSizeVal);
          setTotalPages(result);
        } else {
          setTotalPages([]);
        }
      } else {
        setTotalPages([]);
      }
    }
  }, [data, perPageRow, totalCount, isShowPagination]);

  useEffect(() => {
    if (pagination && isShowPagination) {
      const activePageIndex = pagination.pageIndex;
      const activePageSize = pagination.pageSize;
      setPerPageRow(activePageSize);
      getPaginationChangeValue(Number(activePageIndex + 1), Number(activePageSize));
    }
  }, [pagination?.pageIndex, pagination.pageSize, getPaginationChangeValue, isShowPagination]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    pageCount: totalPages.length,
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
  });

  const perPageRows = [
    { id: "10", name: "10" },
    { id: "20", name: "20" },
    { id: "30", name: "30" },
    { id: "50", name: "50" },
    { id: "100", name: "100" },
  ];

  const handlePerPageRowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPerPage = event.target.value;
    setPerPageRow(newPerPage);
    const pageCount = Math.ceil(totalCount / parseInt(newPerPage));
    const newPageIndex = Math.min(currentPage - 1, pageCount - 1);
    table.setPageSize(Number(newPerPage));
    table.setPageIndex(newPageIndex);
    getPaginationChangeValue(newPageIndex + 1, parseInt(newPerPage));
  };

  const handlePageClick = async (index: number) => {
    setCurrentPage(index + 1);
    await table.setPageIndex(index);
  };

  const goToNextPage = async () => {
    await table.nextPage();
    const pageIndex = table.getState().pagination.pageIndex;
    setCurrentPage(pageIndex + 1);
    const groupIndex = Math.floor(pageIndex / 5);
    setCurrentPageGroup(groupIndex * 5);
  };

  const moveToPreviousPage = async () => {
    await table.previousPage();
    const pageIndex = table.getState().pagination.pageIndex;
    setCurrentPage(pageIndex + 1);
    const groupIndex = Math.floor(pageIndex / 5);
    setCurrentPageGroup(groupIndex * 5);
  };

  const goToNextPageGroup = () => {
    setCurrentPageGroup((prevGroup) => prevGroup + 5);
  };

  const goToPreviousPageGroup = () => {
    setCurrentPageGroup((prevGroup) => Math.max(0, prevGroup - 5));
  };

  const renderPagination = () => {
    const pageCount = totalPages.length;
    const currentPage = table.getState().pagination.pageIndex;
    const pageNumbers: (number | string)[] = [];

    if (pageCount <= 5) {
      for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(0);
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(pageCount - 2, currentPage + 1);

      if (currentPage > 2) {
        pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < pageCount - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(pageCount - 1);
    }

    const uniquePageNumbers = Array.from(new Set(pageNumbers));

    return (
      <div className="flex items-center gap-2">
        {uniquePageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span key={index} className="w-6 h-6 text-center text-gray-500">
                {page}
              </span>
            );
          }
          return (
            <button
              key={page}
              onClick={() => handlePageClick(Number(page))}
              className={`w-8 h-6 text-xs rounded-md px-2 py-1 ${
                page === currentPage
                  ? "text-white bg-indigo-600 border-indigo-600"
                  : "text-gray-800 bg-slate-200 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              {Number(page) + 1}
            </button>
          );
        })}
      </div>
    );
  };

  const capitalizeFirstChar = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderCell = (cell: any) => {
    const value = cell.getValue();
    const columnDef = cell.column.columnDef;
    const timestampRegex =
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;

    if (typeof value === "string" && !timestampRegex.test(value)) {
      return capitalizeFirstChar(value);
    }

    if (columnDef.cell) {
      return columnDef.cell(cell);
    }

    return value;
  };

  const dummyRows = Array.from(
    { length: pagination.pageSize - data.length },
    (_, i) => ({
      id: `dummy-${i}`,
      dummy: true,
    })
  );

  return (
    <div className="flex flex-col justify-between max-h-[calc(100vh-350px)]">
      <div className="transition-all duration-700">
        <div className="overflow-y-auto overflow-x-auto max-h-[calc(100vh-200px)] 2xl:max-h-[calc(100vh-383px)]">
          <table className="min-w-full rounded-lg border border-gray-200">
            <thead className="sticky top-0 bg-gray-800 text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers?.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="px-3 py-2 text-left text-sm font-semibold cursor-pointer border-b border-gray-300"
                    >
                      <div className="flex items-center">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() !== false && (
                          <span>{header.column.getIsSorted() === "asc" ? " ↑" : " ↓"}</span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row, rowIndex) => (
                  <tr
                    key={row.id}
                    className={`${
                      rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } border-b transition duration-300 ease-in-out hover:bg-gray-100`}
                  >
                    {row.getVisibleCells()?.map((cell) => (
                      <td key={cell.id} className="px-3 py-2 text-sm text-gray-700 border-b border-gray-200">
                        <div className="flex items-center" title={renderCell(cell)}>
                          <p className="overflow-hidden truncate">{renderCell(cell)}</p>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {isShowPagination && (
          <div className="flex items-center justify-between py-3 px-4 bg-gray-800 text-white">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="perPage" className="text-sm">Per page:</label>
                <select
                  id="perPage"
                  value={perPageRow}
                  onChange={handlePerPageRowChange}
                  className="border border-gray-300 p-1 rounded-md text-sm"
                >
                  {perPageRows.map((perPage) => (
                    <option key={perPage.id} value={perPage.id}>
                      {perPage.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
                onClick={goToPreviousPageGroup}
                disabled={currentPageGroup === 0}
              >
                Prev
              </button>
              {renderPagination()}
              <button
                className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
                onClick={goToNextPageGroup}
                disabled={currentPageGroup === totalPages.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
