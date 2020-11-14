const KEYS = {
  members: "members",
  memberId: "memberId",
};

export const getMemberType = () => [
  {
    id: "building_owner",
    title: "Building Owner",
  },
  {
    id: "flat_owner",
    title: "Flat Owner",
  },
  {
    id: "organization",
    title: "Organization",
  },
  {
    id: "tenant",
    title: "Tenant",
  },
];

export const getBloodGroup = () => [
  {
    id: "a_pos",
    title: "A+",
  },
  {
    id: "o_pos",
    title: "O+",
  },
  {
    id: "b_pos",
    title: "B+",
  },
  {
    id: "ab_pos",
    title: "AB+",
  },
  {
    id: "a_neg",
    title: "A-",
  },
  {
    id: "o_neg",
    title: "O-",
  },
  {
    id: "b_neg",
    title: "B-",
  },
  {
    id: "ab_neg",
    title: "AB-",
  },
];

export function insertMember(data) {
  let members = getAllMembers();
  data["id"] = generateMemberId();
  members.push(data);
  localStorage.setItem(KEYS.members, JSON.stringify(members));
}

export function generateMemberId() {
  if (localStorage.getItem(KEYS.memberId) == null)
    localStorage.setItem(KEYS.memberId, "0");
  var id = parseInt(localStorage.getItem(KEYS.memberId));
  localStorage.setItem(KEYS.memberId, (++id).toString());
  return id;
}

export function getAllMembers() {
  if (localStorage.getItem(KEYS.members) == null)
    localStorage.setItem(KEYS.members, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.members));
}
