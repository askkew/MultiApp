import {React, useState} from 'react'
import { createTheme, Box, TextField, FormControl, Button, IconButton, Accordion, AccordionSummary, AccordionDetails, Typography, Icon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import moment from 'moment';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#f44336',
//     },
//     secondary: {
//       main: '#00e676',
//     },
//   },
// });

const Root = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundColor: '#141b2d',
  padding: '10px'
});

const Root2 = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

const Root3 = styled('div')({
  paddingTop: "10px",
  paddingRight: "15px",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  color: 'white !important'
});

export const Todo = () => {
  const initialList = [];

  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');
  // const [description, setDescription] = useState('');

  function handleChange(event){
    setName(event.target.value);
  }

  function handleAdd(){
    const id = moment().format();
    const newList = list.concat({ id, name, summary: 'testsummary' });
    setList(newList);
    console.log(newList);
  }

  function handleRemove(id){
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    console.log(newList);
  }
  // function handleAddDescription(){
  //   const newList = name.concat({summary});
  //   setDescription(newDescription);
  //   console.log(newDescription);
  // }

  // function handleCheck(name){
  //   const newList = list.concat({ name });
  //   setList(newList);
  //   console.log(newList);
  // }


  return (
    <Root>
      <Root2>
        <FormControl>
          <CustomTextField 
            variant='outlined'
            label='Enter Todo Item'
            onChange={handleChange}
          />
        </FormControl>
        <Button
          style={{marginLeft: '10px', height: '55px', backgroundColor: "#4cceac"}}
          variant='contained'
          label='Submit'
          onClick={handleAdd}
          >
          Submit
        </Button>
      </Root2>
      <Root3>
        {list.map((item) => (
          <Accordion style={{backgroundColor: "rgb(37, 47, 74)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {item.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormControl>
                <CustomTextField 
                  variant='outlined'
                  label='Enter Todo Desc'
                />
              </FormControl>
              <Button
                style={{marginLeft: '10px', height: '55px', backgroundColor: "#4cceac"}}
                variant='contained'
                label='Submit'
                >
                Submit
              </Button>
                {item.summary}
            </Typography>
            <IconButton
            color="primary"
            aria-label="delete"
            onClick={() => handleRemove(item.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
            color="secondary"
            aria-label="complete"
            // onClick={() => handleCheck(item.name)}
            >
              <CheckBoxIcon />
            </IconButton>
          </AccordionDetails>
        </Accordion>
        ))}

        {/* <Accordion style={{backgroundColor: "rgb(37, 47, 74)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Test
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IconButton color="primary" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="complete">
              <CheckBoxIcon />
            </IconButton>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: "rgb(37, 47, 74)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IconButton color="primary" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="complete">
              <CheckBoxIcon />
            </IconButton>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: "rgb(37, 47, 74)"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IconButton color="primary" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="complete">
              <CheckBoxIcon />
            </IconButton>
          </AccordionDetails>
        </Accordion> */}
      </Root3>
    </Root>
  )
}
