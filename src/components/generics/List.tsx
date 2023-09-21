interface ListItem {
  id: number;
  first: string;
  last: string;
}

type ListProps<T extends ListItem> = {
  items: T[];
  onClick: (value: T) => void;
}

export const List = <T extends ListItem>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of itmes</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id} {item.first} {item.last}
          </div>
        )
      })}
    </div>
  )
}