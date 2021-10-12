import { Forms } from '@grafana/ui';

interface UserDTO {
  name: string;
  email: string;
  //...
}

const defaultUser: Partial<UserDTO> = {
  name: 'Roger Waters',
  // ...
}

<Form
  defaultValues={defaultUser}
  onSubmit={async (user: UserDTO) => await createUser(user)}
>{({register, errors}) => {
  return (
    <Field>
      <Input {...register("name")}/>
      <Input {...register("email", {required: true})} type="email" />
      <Button type="submit">Create User</Button>
    </Field>
  )
}}</Form>