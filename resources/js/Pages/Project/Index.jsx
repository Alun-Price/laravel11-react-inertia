import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import Pagination from '@/Components/Pagination';
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from '@/constants.jsx';

export default function Index( { auth, projects } )
{
  return (
    <AuthenticatedLayout
      user={ auth.user }
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Image</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3 text-nowrap">Create Date</th>
                    <th className="px-3 py-3 text-nowrap">Due Date</th>
                    <th className="px-3 py-3">Created By</th>
                    <th className="px-3 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { projects.data.map( ( project ) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={ project.id }
                    >
                      <td className="px-3 py-2">{ project.id }</td>
                      <td className="px-3 py-2">
                        <img src={ project.image_path } alt="project image" width={ 100 } height={ 100 } />
                      </td>
                      <td className="px-3 py-2">{ project.name }</td>
                      <td className="px-3 py-2">
                        <span className={ "px-2 py-1 text-white rounded " +
                          PROJECT_STATUS_CLASS_MAP[ project.status ] }>
                          { PROJECT_STATUS_TEXT_MAP[ project.status ] }
                        </span>
                      </td>
                      <td className="px-3 py-2">{ project.created_at }</td>
                      <td className="px-3 py-2">{ project.due_date }</td>
                      <td className="px-3 py-2">{ project.createdBy.name }</td>
                      <td className="px-3 py-2">
                        <Link href={ route( 'project.edit', project.id ) }
                          className='mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline'
                        >Edit</Link>
                        <Link href={ route( 'project.destroy', project.id ) }
                          className='mx-1 font-medium text-red-600 dark:text-red-500 hover:underline'
                        >Delete</Link>
                      </td>
                    </tr>
                  ) ) }
                </tbody>
              </table>
              <Pagination links={ projects.meta.links } />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}