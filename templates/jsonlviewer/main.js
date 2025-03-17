import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Pagination,
  Box
} from '@mui/material';

function JSONLViewer() {
  // Lista de arquivos JSONL disponíveis (ajuste conforme necessário)
  const fileList = [
    "sofifa1.jsonl",
    "sofifa2.jsonl",
    "sofifa_consolidated.jsonl"
  ];

  const [selectedFile, setSelectedFile] = useState(fileList[0]);
  const [headers, setHeaders] = useState([]);
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Carrega o arquivo selecionado sempre que "selectedFile" mudar
  useEffect(() => {
    fetch(selectedFile)
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").filter((line) => line.trim() !== "");
        if (lines.length === 0) return;
        // A primeira linha contém os headers
        const hdrs = JSON.parse(lines[0]);
        setHeaders(hdrs);
        // Cada linha subsequente é um registro (vetor de valores)
        const recs = lines.slice(1).map((line) => JSON.parse(line));
        setRecords(recs);
        setCurrentPage(1);
      })
      .catch((err) => console.error("Erro ao carregar o arquivo:", err));
  }, [selectedFile]);

  // Filtra os registros com base na pesquisa; filtra em todas as colunas
  const filteredRecords = records.filter((record) =>
    headers.some((header) => {
      const value = record[header];
      return (
        value &&
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
  );

  const totalRecords = filteredRecords.length;
  const totalPages = Math.ceil(totalRecords / rowsPerPage);
  const displayedRecords = filteredRecords.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* AppBar com barra de pesquisa */}
      <AppBar position="static" sx={{ marginBottom: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JSONL Viewer
          </Typography>
          <TextField
            label="Pesquisar"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Toolbar>
      </AppBar>

      {/* Seletor de arquivo e contador de registros */}
      <Box sx={{ marginBottom: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
        <FormControl>
          <InputLabel id="file-select-label">Arquivo</InputLabel>
          <Select
            labelId="file-select-label"
            value={selectedFile}
            label="Arquivo"
            onChange={handleFileChange}
          >
            {fileList.map((file) => (
              <MenuItem key={file} value={file}>
                {file}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body1">
          Total de registros encontrados: {totalRecords}
        </Typography>
      </Box>

      {/* Tabela de dados */}
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRecords.map((record, index) => (
              <TableRow key={index}>
                {headers.map((header, i) => (
                  <TableCell key={i}>{record[header]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Seletor de linhas por página e paginação */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
        <FormControl>
          <InputLabel id="rows-per-page-label">Linhas por página</InputLabel>
          <Select
            labelId="rows-per-page-label"
            value={rowsPerPage}
            label="Linhas por página"
            onChange={handleRowsPerPageChange}
          >
            {[20, 50, 100, 200].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
      </Box>
    </Box>
  );
}

export default JSONLViewer;
