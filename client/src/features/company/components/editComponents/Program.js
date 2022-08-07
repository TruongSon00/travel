import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, TextField } from "@mui/material";

function Program(props) {
  const { boolean, setBoolean, daytime, programs } = props;
  const programLength = parseInt(daytime) || 0;

  const [contentValue, setContentValue] = useState([]);
  const [noteValue, setNoteValue] = useState([]);

  const notes = useRef([]);
  const contents = useRef([]);

  const notes1 = useRef([]);
  const contents1 = useRef([]);

  const a = useRef(0);

  // useEffect(() => {
  //   const test = () => {
  //     programs.current.forEach((program, index) => {
  //       contents1.current[index] = program.content;
  //       setContentValue([...contents1.current]);
  //       notes1.current[index] = program.note;
  //       setNoteValue([...notes1.current]);
  //     });
  //   };
  //   programs.current ? test() : setContentValue();
  // }, [programs.current]);

  const handleOnChangeContent = (e, index) => {
    contents.current[index] = e.target.value;
    setContentValue([...contents.current]);
    a.current = Math.random();
    setBoolean(true);
  };

  const handleOnChangeNote = (e, index) => {
    notes.current[index] = e.target.value;
    setNoteValue([...notes.current]);
    a.current = Math.random();
    setBoolean(true);
  };

  useEffect(() => {
    [...new Array(programLength)].map((data, index) => {
      programs.current[index] = {
        content: contentValue[index],
        note: noteValue[index],
      };
    });
  }, [a.current]);
  console.log(boolean);

  return (
    <>
      {!boolean
        ? programs.current.map((program, index) => {
            return (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={1}
                    sx={{ textAlign: "center", mt: 4, fontSize: "1.4rem", fontWeight: "bold" }}
                  >
                    Day {index + 1}
                  </Grid>
                  <Grid item xs={5.5}>
                    <TextField
                      focused
                      value={program.content}
                      label="Actions"
                      variant="outlined"
                      rows={4}
                      multiline
                      fullWidth
                      sx={{
                        mb: 2,
                        "& label": {
                          fontSize: "1.4rem",
                          paddingRight: 1,
                          backgroundColor: "#f0f2f5",
                        },
                      }}
                      onChange={(e) => handleOnChangeContent(e, index)}
                    />
                  </Grid>
                  <Grid item xs={5.5}>
                    <TextField
                      focused
                      name={`note${index}`}
                      label="Note*"
                      value={program.note}
                      variant="outlined"
                      rows={4}
                      multiline
                      fullWidth
                      sx={{
                        mb: 2,
                        "& label": {
                          fontSize: "1.4rem",
                          paddingRight: 1,
                          backgroundColor: "#f0f2f5",
                        },
                      }}
                      onChange={(e) => handleOnChangeNote(e, index)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })
        : [...new Array(parseInt(daytime))].map((i, index) => (
            <Grid item xs={12} key={index}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={1}
                  sx={{ textAlign: "center", mt: 4, fontSize: "1.4rem", fontWeight: "bold" }}
                >
                  Day {index + 1}
                </Grid>
                <Grid item xs={5.5}>
                  <TextField
                    focused
                    label="Actions"
                    variant="outlined"
                    rows={4}
                    multiline
                    fullWidth
                    sx={{
                      mb: 2,
                      "& label": {
                        fontSize: "1.4rem",
                        paddingRight: 1,
                        backgroundColor: "#f0f2f5",
                      },
                    }}
                    onChange={(e) => handleOnChangeContent(e, index)}
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <TextField
                    focused
                    name={`note${index}`}
                    label="Note*"
                    variant="outlined"
                    rows={4}
                    multiline
                    fullWidth
                    sx={{
                      mb: 2,
                      "& label": {
                        fontSize: "1.4rem",
                        paddingRight: 1,
                        backgroundColor: "#f0f2f5",
                      },
                    }}
                    onChange={(e) => handleOnChangeNote(e, index)}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
    </>
  );
}

export default Program;
