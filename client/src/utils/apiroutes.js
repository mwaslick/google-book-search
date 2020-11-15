const axios = require("axios")
const APIKey = "AIzaSyBqbJDVzDVFiYNBVrUSXge-9KWalCV1N_s"

const searchBooks= function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + APIKey)
    }

module.exports = searchBooks


