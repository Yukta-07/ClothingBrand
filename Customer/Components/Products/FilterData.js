export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
        { value: 'XL', label: 'XL', checked: false },
        { value: 'XXL', label: 'XXL', checked: false },
        { value: '3XL', label: '3XL', checked: true },
      ],
    },
  ];
  export const singleFilter = [
    {
        id:"price",
        name:"Price",
        options:[
            { value:"159-399" , label:"159-399" },
            { value:"499-899" , label:"499-899" },
            { value:"1000-1499" , label:"1000-1499" },
            { value:"1500-1800" , label:"1500-1800" },
            { value:"2000-2600" , label:"2000-2600" },
            { value:"2700-3500" , label:"2700-3500" },
            
        ]
    },{
        id:"discount",
        name:"Discount Range",
        options:[
{value:"20",label:"20% and above"},
{value:"30",label:"30% and above"},
{value:"40",label:"40% and above"},
{value:"25",label:"25% and above"},
{value:"35",label:"35% and above"},
        ]
    }
  ]