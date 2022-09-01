import { adminSdk } from '@boilerplate/gql-admin';
import { getSession } from 'next-auth/react';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const id = session?.user?.id;
  if (id) {
    const data = await adminSdk.GetUser({ id });
    res.send({ me: data });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
