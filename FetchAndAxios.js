//Con Axios
// GET (Read)
const getData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data')
    return response.data
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}

// POST (Create)
const createData = async (newData) => {
  try {
    const response = await axios.post('https://api.example.com/data', newData)
    return response.data
  } catch (error) {
    console.error('Error creating data:', error)
    throw error
  }
}

// PUT/PATCH (Update)
const updateData = async (id, updatedData) => {
  try {
    // Con PUT (reemplazo completo)
    const responsePut = await axios.put(`https://api.example.com/data/${id}`, updatedData)
    // O con PATCH (actualización parcial)
    const responsePatch = await axios.patch(`https://api.example.com/data/${id}`, updatedData)
    return responsePut.data // o responsePatch.data
  } catch (error) {
    console.error('Error updating data:', error)
    throw error
  }
}

// DELETE (Delete)
const deleteData = async (id) => {
  try {
    const response = await axios.delete(`https://api.example.com/data/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting data:', error)
    throw error
  }
}

//Con Fetch
// GET (Read)
const getDataF = async () => {
  try {
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}

// POST (Create)
const createDataF = async (newData) => {
  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData)
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating data:', error)
    throw error
  }
}

// PUT/PATCH (Update)
const updateDataF = async (id, updatedData) => {
  try {
    // Con PUT (reemplazo completo)
    const response = await fetch(`https://api.example.com/data/${id}`, {
      method: 'PUT', // o 'PATCH' para actualización parcial
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData)
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error updating data:', error)
    throw error
  }
}

// DELETE (Delete)
const deleteDataF = async (id) => {
  try {
    const response = await fetch(`https://api.example.com/data/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error deleting data:', error)
    throw error
  }
}