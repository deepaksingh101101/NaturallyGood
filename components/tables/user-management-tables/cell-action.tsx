'use client';

import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { UserManagement } from '@/constants/user-management-data';
import { Edit, MoreHorizontal, Trash, Eye, UserPlus, UserCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: UserManagement;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {
    // Your confirm logic here
  };

  const handleRegisterNewUser = () => {
    router.push('/user-management/register'); 
  };

  const handleEditUser = () => {
    router.push(`/user-management/edit/${data.userId}`); 
  };

  const handleViewUser = () => {
    router.push(`/user-management/view/${data.userId}`); 
  };

  const handleAssignEmployee = () => {
    router.push(`/user-management/assign/${data.userId}`); 
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={handleRegisterNewUser}>
            <UserPlus className="mr-2 h-4 w-4" /> Register New User
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleEditUser}>
            <Edit className="mr-2 h-4 w-4" /> Edit User Details
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleViewUser}>
            <Eye className="mr-2 h-4 w-4" /> View User
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleAssignEmployee}>
            <UserCheck className="mr-2 h-4 w-4" /> Assign Employee
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
