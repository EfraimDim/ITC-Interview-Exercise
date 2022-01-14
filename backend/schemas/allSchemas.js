exports.loginSchemaAJV = {
  type: 'object',
  properties: {
    employeeID: {
      type: "string" 
    },
    password: {
      type: "string", minLength: 10, maxLength: 10 
    }
  },
  required: [ 'employeeID', 'password' ],
  additionalProperties: false,
};