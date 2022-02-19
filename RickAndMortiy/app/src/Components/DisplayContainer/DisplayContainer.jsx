import { Box } from "@mui/material";
import DataList from './DataList/DataList.jsx';
import styles from './DisplayContainerStyles.jsx';
// ===========================================================

export default function DisplayContainer({ arrayOfCharacters }){
    return(
        <Box sx={styles.DisplayContainer} >
            <Box sx={styles.Display}>
                <DataList data={arrayOfCharacters} />
            </Box>
        </Box>
    )
};
// =============================================================