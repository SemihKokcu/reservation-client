import  React,{useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from 'reactstrap';

const columns = [
  {
    id: 'patientName',
    label: 'Hasta Adı',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('tr-TR'),
  },
  {
    id: 'doctorName',
    label: 'Doktor Adı',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('tr-TR'),
  },
  {
    id: 'startTime',
    label: 'Randevu Tarihi',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  
];


const ReservationList = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [productData, setProductData] = useState([]);
  const [totalItems,setTotalItems] = useState(0);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const fetchData= async()=> {
   
  }

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const itemImage=(image)=> {
    if (image) {
      return <img width={50} height={50} src={image} alt="ürün" />;
    } else {
      return <img width={50} height={50} src="/placeholder.png" alt="ürün" />;
    }
  }
  const editButton = (productId) => {
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleEdit = async (e) => {
      e.preventDefault();
      console.log('Edit button clicked for product ID:', productId);
    
      
    };
    
  
    return (
      <>
        <Button className="" color="info" href="#pablo" onClick={handleEdit} size="sm">
          Düzenle
        </Button>
        {/* <EditProduct product={product} open={open} handleClose={handleClose} successCallBack={()=>{
          fetchData()
          toast.success("product updated successfully")}}
          errorCallback={()=>{toast.error("Product updated failed")}}
        
        /> */}
      </>
    );
  };
  
  const deleteButton = (productId)=> {
    const handleDelete = async (e) => {
      e.preventDefault();
      console.log("Delete button clicked for product ID:", productId);
    };
    return (
      <Button
        className=""
        color="warning"
        href="#pablo"
        onClick={handleDelete}
        size="sm"
      >
        Sil
      </Button>
    );
  }
  
  return (
   
<>

{productData.length !==0 ? (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover /> */}
       <TableContainer sx={{ maxHeight: 440 }}>
       <Table stickyHeader aria-label="sticky table">
         <TableHead>
           <TableRow>
             {columns.map((column, key) => (
               <TableCell
                 key={key}
                 align={column.align}
                 style={{ minWidth: column.minWidth }}
               >
                 {column.label}
               </TableCell>
             ))}
           </TableRow>
         </TableHead>
         <TableBody>
           {productData && productData.map((row) => {
             return (
               <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                 {columns.map((column) => {
                   const value = row[column.id];
                   return (
                     <TableCell key={column.id} align={column.align}>
                       {column.id === 'edit' ? (
                         editButton(row._id)
                       ) : column.id === 'remove' ? (
                         deleteButton(row._id)
                       ) : column.format && typeof value === 'number' ? (
                         column.format(value)
                       ) : (
                         value
                       )}
                     </TableCell>
                   );
                 })}
               </TableRow>
             );
           })}
         </TableBody>
       </Table>
     </TableContainer>
     <TablePagination
     rowsPerPageOptions={[10, 25, 100]}
     component="div"
     count={totalItems}
     rowsPerPage={rowsPerPage}
     page={page}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
   />
 </Paper>
     ): productData.length===0 ?(
     <div className='text-center'>
      <img style={{width:'25%'}} src={require('../../assets/img/brand/crow-black.png')}/>
      </div>)
      :(
        <div className='text-center'>
      <img style={{width:'25%'}} src={require('../../assets/img/brand/crow-black.png')}/>
        <div className='text-center'>
      <Button className="" color="info" href="#pablo" onClick={()=>{window.location.reload()}} size="sm">
          Yenile
        </Button>
      </div>
      </div>
      )}
      
  </>
    
  );
};

export default ReservationList;
