import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import styles from "../Css/GainerCss/Gainer/Pagination.module.css"
import { setGainerPageNumber } from '../features/Analytics'
const Pagination = () => {
  const dispatch=useDispatch()
  const handlePageClick = (event:any) => {
    dispatch(setGainerPageNumber({
      pageNumber:event.selected+1,
    }))
  };
  return (
    <div>
        <ReactPaginate
        breakLabel="...."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={269}
        previousLabel="< Previous"
        // renderOnZeroPageCount={null}
        className={styles.Pagination}
        marginPagesDisplayed={2}
        activeClassName={styles.Pagination_Active}
        pageClassName={styles.Pagination_Item}
        previousLinkClassName={styles.Pagination_Item_Previous}
        nextLinkClassName={styles.Pagination_Item_Next}
      />
    </div>
  )
}

export default Pagination