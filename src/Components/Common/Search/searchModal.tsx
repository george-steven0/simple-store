import { BiSearchAlt } from "react-icons/bi"; 
import { Box, FormControl, IconButton, InputAdornment, Modal, OutlinedInput } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    width: '80%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius : '8px',
    p: 4,
}

type searchProps ={
    open : boolean,
    close : () => void,
}
const SearchModal = ({open,close}:searchProps) => {
    return ( 
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-search-title"
            aria-describedby="modal-search-description"
            >
            <Box sx={style}>
                <FormControl variant="outlined" className="w-full">
                    <OutlinedInput
                        placeholder="Search..."
                        id="outlined-adornment-search"
                        endAdornment={<InputAdornment position="end">
                            <IconButton><BiSearchAlt className="text-4xl text-mainColor" /></IconButton>
                        </InputAdornment>}
                        aria-describedby="outlined-search-helper-text"
                        inputProps={{
                        'aria-label': 'search',
                        }}
                    />
                </FormControl>
            </Box>
        </Modal>
    );
}

export default SearchModal;