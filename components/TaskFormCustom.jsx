'use client';
import { createTaskCustom } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? 'Pending' : 'Create Task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }

    if (state.message) {
      toast.success('task created');
      return;
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="content" required />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskFormCustom;
