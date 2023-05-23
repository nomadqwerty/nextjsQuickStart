console.log(process);
const endpoint = (req, res) => {
  console.log(req.method);

  console.log(req.query);
  if (req.method === "GET") {
    res.statusCode = 200;
    return res.json({
      status: "success",
      message: "endpoint working",
      data: { paramVal: req.query },
    });
  }
  res.statusCode = 400;
  res.end("no post");
};

export default endpoint;
