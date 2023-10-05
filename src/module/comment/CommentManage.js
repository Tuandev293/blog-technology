import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import Table from "../../components/table/Table";

const CommentManage = () => {
  return (
    <div>
      <DashboardHeading title="Comment" desc="All comment"></DashboardHeading>
      <div className="flex justify-end gap-5 mb-10">
        <div className="w-full max-w-[300px]">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 border-solid rounded-lg"
            placeholder="Search post..."
            // onChange={handleSearchPost}
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment</th>
            <th>Author</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Hay quá</td>
            <td>Test</td>
            <td>20/01/2022</td>
            <td>AC</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CommentManage;
