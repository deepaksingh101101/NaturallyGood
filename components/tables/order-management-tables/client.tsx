'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
// import { UserManagement, userManagementData } from '@/constants/user-management-data';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { OrderManagement, OrderManagementData } from '@/constants/order-management-data';

export const OrderManagementClient: React.FC = () => {
  const router = useRouter();
  const initialData: OrderManagement[] = OrderManagementData;
  const [data, setData] = useState<OrderManagement[]>(initialData);

  const handleSearch = (searchValue: string) => {
    const filteredData = initialData.filter(item =>
      item.deliveryStatus.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    // Example: Sorting by first name
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.deliveryStatus.localeCompare(b.deliveryStatus);
      } else {
        return b.deliveryStatus.localeCompare(a.deliveryStatus);
      }
    });
    setData(sortedData);
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Order (${data.length})`}
          description="Manage Orders (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/order`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        searchKey="deliveryStatus"
        columns={columns}
        data={data}
        // onSearch={handleSearch} 
        // onSort={handleSort} 
      />
    </>
  );
};
