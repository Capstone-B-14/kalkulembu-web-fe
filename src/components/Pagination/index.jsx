import ReactPaginate from "react-paginate";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Pagination = () => {
    return (
      <div className="text-lg font-semibold">
        <ReactPaginate
          breakLabel={<span className="mx-2">...</span>}
          nextLabel={
            <span>
              <BsChevronRight className="text-xl" />
            </span>
          }
          pageCount={10}
          previousLabel={
            <span>
              <BsChevronLeft className="text-xl" />
            </span>
          }
          renderOnZeroPageCount={null}
          containerClassName="items-center flex mt-6 mb-5 ml-[10px]"
          pageClassName="w-8 h-2 flex items-center rounded-md ml-3 hover:bg-lightGray top-[700px]"
        />
      </div>
    );
};

export default Pagination; 