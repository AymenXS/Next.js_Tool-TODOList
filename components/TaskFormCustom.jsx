'use client';
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus, useFormState } from 'react-dom';

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

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="content" required />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskFormCustom;
