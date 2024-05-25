import { editTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form action={editTask} className="max-w-sm p-12 border border-base-300 rounded-lg">
      <input type="hidden" name="id" value={id} />
      <input type="text" defaultValue={content} name="content" className="input input-bordered w-full" required />
      <div className="form-control">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm">Confirm</button>
    </form>
  );
};
export default EditForm;
