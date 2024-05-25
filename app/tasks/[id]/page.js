import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent mb-8">
          Back to Tasks
        </Link>
        <EditForm task={task}></EditForm>
      </div>
    </>
  );
};
export default SingleTaskPage;
