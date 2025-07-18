import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface companionsListProps {
  title: string;
  companions?: Companion[];
  className?: string;
}

function CompanionsList({title, companions, className}:companionsListProps) {
  return (
    <article className={cn("companion-list", className)}>
      <h2>Recent Sessions</h2>

      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="text-lg w-2/3">Lessons</TableHead>
      <TableHead className='text-lg'>Subject</TableHead>
      <TableHead className='text-lg text-right'>duration</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {companions?.map((companion) => (
      <TableRow key={companion.ID}>
        <TableCell>
          <Link href={`/companions/${companion.ID}`}>
            <div className='flex items-center gap-2'>
              <div className='flex items-center items-center rounded-b-lg max-md:hidden'>
                <img src={`/icons/${companion.subject}.svg`}
                  alt={companion.subject}
                  width={30} height={30} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold'>{title}</p>
                <p className='text-lg'>{companion.topic}</p>
              </div>
            </div>
          </Link>
        </TableCell>
        <TableCell>
          <div className='subject-badge w-fit max-md:hidden'>
            {companion.subject}
          </div>
        </TableCell>
        <TableCell className='text-right'>
          <p className='text-2xl'>{companion.duration} <span className='max-md:hidden'>mins</span></p>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
    </article>
  )
}

export default CompanionsList