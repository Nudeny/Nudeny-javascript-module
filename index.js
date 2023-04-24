const axios = require("axios");
const fs = require("fs");
const FormData = require('form-data');

const LOCALHOST_URL = "http://127.0.0.1:8000/";
const URL = "http://ec2-18-136-200-224.ap-southeast-1.compute.amazonaws.com/"

/**
 * Send a form data request to Nudeny classify endpoint.
 * @param {object} form - Multipart/form data containing image files.
 * @return {promise} - Promise of a Response object.
 */
const classifyMultiPartForm = (formData) => {
  return axios.post(URL + "classify/", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
}

/**
 * Send a request to Nudeny classify endpoint.
 * @param {array} paths - Array of image file paths.
 * @return {promise} - Promise of a Response object.
 */
const classify = (paths) => {
  const formData = new FormData();
  for (const path of paths) {
    if (typeof path !== "string") throw "Path must be a string.";
    formData.append("files", fs.createReadStream(path));
    
  }

  return axios.post(URL + "classify/", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
}

/**
 * Send a request to Nudeny classify-url endpoint.
 * @param {array} urls - Array of image url source.
 * @return {promise} - Promise of a Response object.
 */
const classifyUrl = (urls) => {
  const sources = []
  for(const url of urls){
    if (typeof url !== "string") throw "URL must be a string.";
    sources.push({"source":url})
  }

  return axios.post(URL + "classify-url/", sources, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


/**
 * Send a form data request to Nudeny detect endpoint.
 * @param {object} form - Multipart/form data containing image files.
 * @return {promise} - Promise of a Response object.
 */
const detectMultiPartForm = (formData) => {
  return axios.post(URL + "detect/", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
}

/**
 * Send a request to Nudeny detect endpoint.
 * @param {array} paths - Array of image file paths.
 * @return {promise} - Promise of a Response object.
 */
const detect = (paths) => {
  const formData = new FormData();
  for (const path of paths) {
    if (typeof path !== "string") throw "Path must be a string.";
    formData.append("files", fs.createReadStream(path));
    
  }

  return axios.post(URL + "detect/", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
}

/**
 * Send a request to Nudeny detect-url endpoint.
 * @param {array} urls - Array of image url source.
 * @return {promise} - Promise of a Response object.
 */
const detectUrl = (urls) => {
  const sources = []
  for(const url of urls){
    if (typeof url !== "string") throw "URL must be a string.";
    sources.push({"source":url})
  }

  return axios.post(URL + "detect-url/", sources, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * Send a form data request to Nudeny censor endpoint.
 * @param {object} form - Multipart/form data containing image files.
 * @return {promise} - Promise of a Response object.
 */
const censorMultiPartForm = (formData) => {
  return axios.post(URL + "censor/", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
}

/**
 * Send a request to Nudeny censor endpoint.
 * @param {array} paths - Array of image file paths.
 * @return {promise} - Promise of a Response object.
 */
const censor = (paths) => {
  const formData = new FormData();
  for (const path of paths) {
    if (typeof path !== "string") throw "Path must be a string.";
    formData.append("files", fs.createReadStream(path));
    
  }

  return axios.post(URL + "censor/", formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });
}

/**
 * Send a request to Nudeny censor-url endpoint.
 * @param {array} urls - Array of image url source.
 * @return {promise} - Promise of a Response object.
 */
const censorUrl = (urls) => {
  const sources = []
  for(const url of urls){
    if (typeof url !== "string") throw "URL must be a string.";
    sources.push({"source":url})
  }

  return axios.post(URL + "censor-url/", sources, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

module.exports = {
  classifyMultiPartForm,
  classify,
  classifyUrl,
  detectMultiPartForm,
  detect,
  detectUrl,
  censorMultiPartForm,
  censor,
  censorUrl
}