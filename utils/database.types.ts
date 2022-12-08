export default interface Database {
  public: {
    Tables: {
      items: {
        Row: {
          'id': string | null,
          'username': string | null,
          'website': string | null,
          'avatar_url': string | null,
        } // The data expected to be returned from a "select" statement.
        Insert: {
          'id': string | null,
          'username': string | null,
          'website': string | null,
          'avatar_url': string | null,
          'created_at': Date | null,
        } // The data expected passed to an "insert" statement.
        Update: {
          'id': string | null,
          'username': string | null,
          'website': string | null,
          'avatar_url': string | null,
          'updated_at': Date | null,
        } // The data expected passed to an "update" statement.
      }
    }
  }
}