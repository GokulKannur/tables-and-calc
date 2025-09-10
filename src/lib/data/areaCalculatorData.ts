export interface ShapeData {
  slug: string;
  name: string;
  subdivisions?: string;
  definition: string;
  properties: string[];
  formulas: {
    label: string;
    inputs: { id: string; name: string }[];
  }[];
  facts: string[];
}

export const areaCalculatorData: ShapeData[] = [
  {
    slug: 'circle',
    name: 'Circle',
    definition: 'A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the centre.',
    properties: ['All points on the edge are equidistant from the center.', 'It has no corners or vertices.'],
    formulas: [{
      label: 'Area = π × r²',
      inputs: [{ id: 'radius', name: 'Radius (r)' }],
    }],
    facts: ['The ratio of a circle’s circumference to its diameter is always π (pi).'],
  },
  {
    slug: 'triangle',
    name: 'Triangle',
    subdivisions: 'Equilateral, Isosceles, Scalene, Right-angled',
    definition: 'A triangle is a polygon with three edges and three vertices.',
    properties: ['The sum of the angles in a triangle is always 180 degrees.'],
    formulas: [
      {
        label: 'Area = 0.5 × base × height',
        inputs: [{ id: 'base', name: 'Base (b)' }, { id: 'height', name: 'Height (h)' }],
      },
      {
        label: "Area = √[s(s-a)(s-b)(s-c)] (Heron's Formula)",
        inputs: [{ id: 'sideA', name: 'Side a' }, { id: 'sideB', name: 'Side b' }, { id: 'sideC', name: 'Side c' }],
      },
    ],
    facts: ['A triangle is one of the most stable geometric shapes, used widely in construction.'],
  },
  {
    slug: 'square',
    name: 'Square',
    definition: 'A square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles).',
    properties: ['All four sides are equal in length.', 'All four angles are 90 degrees.', 'Diagonals are equal and bisect each other at a right angle.'],
    formulas: [{
      label: 'Area = side²',
      inputs: [{ id: 'side', name: 'Side (a)' }],
    }],
    facts: ['A square is a special type of rectangle and a special type of rhombus.'],
  },
  {
    slug: 'rectangle',
    name: 'Rectangle',
    definition: 'A rectangle is a quadrilateral with four right angles.',
    properties: ['Opposite sides are equal and parallel.', 'All angles are 90 degrees.'],
    formulas: [{
      label: 'Area = width × length',
      inputs: [{ id: 'width', name: 'Width (w)' }, { id: 'length', name: 'Length (l)' }],
    }],
    facts: ['Every square is a rectangle, but not every rectangle is a square.'],
  },
  {
    slug: 'trapezoid',
    name: 'Trapezoid',
    definition: 'A trapezoid is a quadrilateral with at least one pair of parallel sides.',
    properties: ['The parallel sides are called bases.', 'The non-parallel sides are called legs.'],
    formulas: [{
      label: 'Area = 0.5 × (a + b) × h',
      inputs: [{ id: 'baseA', name: 'Base a' }, { id: 'baseB', name: 'Base b' }, { id: 'height', name: 'Height (h)' }],
    }],
    facts: ['A trapezoid with non-parallel sides of equal length is called an isosceles trapezoid.'],
  },
  {
    slug: 'parallelogram',
    name: 'Parallelogram',
    definition: 'A parallelogram is a quadrilateral with two pairs of parallel sides.',
    properties: ['Opposite sides are equal in length.', 'Opposite angles are equal in measure.'],
    formulas: [{
      label: 'Area = base × height',
      inputs: [{ id: 'base', name: 'Base (b)' }, { id: 'height', name: 'Height (h)' }],
    }],
    facts: ['Rectangles, rhombuses, and squares are all special types of parallelograms.'],
  },
  {
    slug: 'rhombus',
    name: 'Rhombus',
    definition: 'A rhombus is a quadrilateral whose four sides all have the same length.',
    properties: ['All four sides are equal.', 'Opposite angles are equal.', 'Diagonals bisect each other at right angles.'],
    formulas: [{
      label: 'Area = 0.5 × d1 × d2',
      inputs: [{ id: 'diag1', name: 'Diagonal 1 (d1)' }, { id: 'diag2', name: 'Diagonal 2 (d2)' }],
    }],
    facts: ['A square is a rhombus with four right angles.'],
  },
  {
    slug: 'polygon',
    name: 'Regular Polygon',
    subdivisions: 'Pentagon, Hexagon, Octagon, etc.',
    definition: 'A regular polygon is a polygon that is equiangular (all angles are equal in measure) and equilateral (all sides have the same length).',
    properties: ['All sides are equal.', 'All interior angles are equal.'],
    formulas: [{
      label: 'Area = (n × s²) / (4 × tan(π/n))',
      inputs: [{ id: 'sides', name: 'Number of Sides (n)' }, { id: 'length', name: 'Side Length (s)' }],
    }],
    facts: ['As the number of sides of a regular polygon increases, it begins to approximate a circle.'],
  },
];
