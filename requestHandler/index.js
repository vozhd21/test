module.exports = (controller) => {
  return async (req, res) => {
    try {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        path: req.path,
        method: req.method,
      };

      const response = await controller(httpRequest);
      res.status(response.status).send({ data: response.data });
    } catch (error) {
      res.status(400).send({ message: "Error - " + error.message });
    }
  };
};
