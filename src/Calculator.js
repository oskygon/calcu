
import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(0);

  const handleClick = (e) => {
    setResult(result + e.target.value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setResult('');
  };

  const handleMemoryAdd = () => {
    setMemory((prevMemory) => prevMemory + parseFloat(result));
  };

  const handleMemorySubtract = () => {
    setMemory((prevMemory) => prevMemory - parseFloat(result));
  };

  const handleMemoryRecall = () => {
    setResult(memory.toString());
  };

  const handleSquareRoot = () => {
    setResult(Math.sqrt(parseFloat(result)).toString());
  };

  const handlePercentage = () => {
    setResult((parseFloat(result) / 100).toString());
  };

  const handlePower = () => {
    setResult((parseFloat(result) ** 2).toString());
  };

  return (
    <Grid
    container
    spacing={2}
    justifyContent="center"
    alignItems="center"
    className="calculator-container"
  >
    <Grid item xs={12}>
      <TextField
        label="Resultado"
        variant="outlined"
        fullWidth
        value={result}
        disabled
      />
    </Grid>
    {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
      <Grid item xs={4} key={number}>
        <Button
          variant="contained"
          onClick={handleClick}
          value={number}
          className="calculator-special-button"
        >
          {number}
        </Button>
      </Grid>
    ))}
    
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handleClear}
        className="calculator-special-button"
      >
        C
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handleCalculate}
        className="calculator-special-button calculator-equal-button"
      >
        =
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handleMemoryAdd}
        className="calculator-special-button"
      >
        M+
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handleMemorySubtract}
        className="calculator-special-button"
      >
        M-
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handleMemoryRecall}
        className="calculator-special-button"
      >
        MR
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handleSquareRoot}
        className="calculator-special-button"
      >
        √
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handlePercentage}
        className="calculator-special-button"
      >
        %
      </Button>
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        onClick={handlePower}
        className="calculator-special-button"
      >
        ^
      </Button>
    </Grid>
    <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={handleClick}
          value="+"
          className="calculator-special-button"
        >
          +
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={handleClick}
          value="-"
          className="calculator-special-button"
        >
          -
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={handleClick}
          value="*"
          className="calculator-special-button"
        >
          ×
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={handleClick}
          value="/"
          className="calculator-special-button"
        >
          ÷
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={handleClick}
          value="pi"
          className="calculator-special-button"
        >
          π
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={handleClick}
          value="e"
          className="calculator-special-button"
        >
          e
        </Button>
      </Grid>
  </Grid>
);
};

export default Calculator;