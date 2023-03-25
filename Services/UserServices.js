exports.getUsers = async (req, res) => {

    res.status(200).send({
        status: "success",
    })
    console.log("testing users");
}