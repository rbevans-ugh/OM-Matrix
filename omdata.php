//build data array
$data = [
    [id=>1, name=>"Billy Bob", progress=>"12", gender=>"male", height=>1, col=>"red", dob=>"", driver=>1],
    [id=>2, name=>"Mary May", progress=>"1", gender=>"female", height=>2, col=>"blue", dob=>"14/05/1982", driver=>true],
    [id=>3, name=>"Christine Lobowski", progress=>"42", height=>0, col=>"green", dob=>"22/05/1982", driver=>"true"],
    [id=>4, name=>"Brendon Philips", progress=>"125", gender=>"male", height=>1, col=>"orange", dob=>"01/08/1980"],
    [id=>5, name=>"Margret Marmajuke", progress=>"16", gender=>"female", height=>5, col=>"yellow", dob=>"31/01/1999"],
];

//return JSON formatted data
echo(json_encode($data));