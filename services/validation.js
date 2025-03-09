export default function validateForm(data)
{
    const errors = [ ];
    
    if (data.fname.trim() === "") 
    {   
        errors.push("Invalid First Name!");
    }

    if (data.lname.trim() === "") 
    {   
        errors.push("Invalid Last Name!");
    }

    if(data.email.trim() === "")
    {
        errors.push("Invalid email!");
    }

    if(data.jtitle.trim() === "")
    {
        errors.push("Invalid job title");
    }

    if(data.url.trim() === "")
    {
        errors.push("Invalid url");
    }

    if(data.company.trim() === "")
    {
        errors.push("Invalid company");
    }

    if(data.message.trim() === "")
    {
        errors.push("Invalid message");
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}
