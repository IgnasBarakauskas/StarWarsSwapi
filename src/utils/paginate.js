import _ from "lodash";
export function paginate(items, pageNumber, pageSize) {
  return _(items)
    .slice(0)
    .take((pageNumber + 1) * pageSize)
    .value();
}
