import { useProductPagination } from "../store/useProductPagination"

function Pagination() {
    const {prevPage, nextPage} = useProductPagination()
    
  return (
    <div className="flex justify-center items-center p-2" >
        <div className="join grid grid-cols-2 gap-2">
            <button onClick={prevPage} className="join-item btn bg-emerald-500">Previous page</button>
            <button onClick={nextPage} className="join-item btn bg-emerald-500">Next</button>
        </div>
    </div>
  )
}

export default Pagination
