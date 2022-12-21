exports.success = function (req, res, codeStatus, message) {
  res.status(codeStatus || 200).send({
    error: "",
    body: message,
  });
};

exports.error = function (
  req,
  res,
  codStatus,
  message,
  details
) {
  console.log(details);
  res.status(codStatus || 500).send({
    error: message,
    body: "",
  });
};
