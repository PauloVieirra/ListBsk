import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography, Container, Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import './style.css';

export default function Cadastro() {
  const [aluno, setAluno] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    estatura: '',
    peso: '',
    limitacaoFisica: false,
    limitacaoRespiratoria: false,
    patologia: '',
    horarioPreferencial: ''
  });

  const [responsavel, setResponsavel] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: ''
  });
 
  const handleAlunoChange = (event) => {
    setAluno({ ...aluno, [event.target.name]: event.target.value });
  };

  const handleResponsavelChange = (event) => {
    setResponsavel({ ...responsavel, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setAluno({ ...aluno, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para onde for necessário (por exemplo, um backend)
    console.log("Dados do Aluno:", aluno);
    console.log("Dados do Responsável:", responsavel);
    // Reiniciar os campos após enviar
    setAluno({
      nome: '',
      sobrenome: '',
      idade: '',
      estatura: '',
      peso: '',
      limitacaoFisica: false,
      limitacaoRespiratoria: false,
      patologia: '',
      horarioPreferencial: ''
    });
    setResponsavel({
      nome: '',
      sobrenome: '',
      email: '',
      telefone: ''
    });
  };

  return (
    <Container>
        <div className="card-cad">card</div>
      <Box mb={4}>
        <Paper elevation={0} sx={{ padding: 0.1 }}>
          <Typography variant="h5" gutterBottom>Cadastro de Aluno</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Nome" name="nome" value={aluno.nome} onChange={handleAlunoChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Sobrenome" name="sobrenome" value={aluno.sobrenome} onChange={handleAlunoChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type="number" label="Idade" name="idade" value={aluno.idade} onChange={handleAlunoChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type="number" label="Estatura (cm)" name="estatura" value={aluno.estatura} onChange={handleAlunoChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type="number" label="Peso (kg)" name="peso" value={aluno.peso} onChange={handleAlunoChange} />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={aluno.limitacaoFisica} onChange={handleCheckboxChange} name="limitacaoFisica" />}
                    label="Limitação Física"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={aluno.limitacaoRespiratoria} onChange={handleCheckboxChange} name="limitacaoRespiratoria" />}
                    label="Limitação Psicossocial"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Patologia" name="patologia" value={aluno.patologia} onChange={handleAlunoChange} />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="horario-label">Horário Preferencial</InputLabel>
                  <Select
                    labelId="horario-label"
                    label="Horário Preferencial"
                    name="horarioPreferencial"
                    value={aluno.horarioPreferencial}
                    onChange={handleAlunoChange}
                  >
                    <MenuItem value="Manhã">Manhã</MenuItem>
                    <MenuItem value="Tarde">Tarde</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Typography variant="h6" gutterBottom>Dados do Responsável</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Nome do Responsável" name="nome" value={responsavel.nome} onChange={handleResponsavelChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Sobrenome do Responsável" name="sobrenome" value={responsavel.sobrenome} onChange={handleResponsavelChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type="email" label="Email do Responsável" name="email" value={responsavel.email} onChange={handleResponsavelChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type="tel" label="Telefone do Responsável" name="telefone" value={responsavel.telefone} onChange={handleResponsavelChange} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
