Please refer to Simplilearn Mean Stack Project to see an example of how this backend is connected.


Controller will have all the functions necessary (in this case, it would be things like storing/retrieving/logging into MongoDB)

Model sets up how our data will be stored and which collection

Router is self explanatory, with the get/post/delete and respective functions.

Please do not worry about this too much as functionality in the frontend is most important and we can always fix backend as we go along.

Collections possible:

Groceries for all the items

Carted Items ... ID by user account probably?

UserAccounts (Could separate this into 3, or just use a bool/boolean for admin/employee? )

Requests