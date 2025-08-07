export enum OrganizationType {
  Business = 1,
  NonProfit = 2,
  Government = 3,
  Academic = 4,
  Philanthropic = 5,
  Personal = 100,
  Self = 150,
  Other = 200,
}

export enum OrganizationPermission {
  User = 1,
  Editor = 2,
  Payer = 10,
  Admin = 50,
  Owner = 100,
}
