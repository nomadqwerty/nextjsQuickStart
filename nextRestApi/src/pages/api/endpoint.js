const endpoint = (req, res) => {
  console.log(req.method);
  if (req.method === "GET") {
    res.statusCode = 200;
    return res.json({
      status: "success",
      message: "endpoint working",
    });
  }
  res.statusCode = 400;
  res.end("no post");
};

export default endpoint;
