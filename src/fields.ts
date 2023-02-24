/**
 * PDF coordinate
 */
interface Coordinate {
  /**
   * The coordinate is arranged [x, y], where `x` is the number of pixels from the left
   * and `y` is the number of pixels from the bottom.
   * - Left of PDF is `x = 0`
   * - Bottom of PDF is `y = 0`
   */
  coordinate: [number, number];
  /**
   * 1-based indexing, stating what page of the PDF the coordinate applies to.
   */
  page: number;
}

/**
 * Common field properties
 */
interface FieldProperties {
  /**
   * Array of coordinates
   *
   * @see {Coordinate.coordinate}
   */
  coordinates: Array<Coordinate>;
  /**
   * An optional default value used for the field.
   */
  default?: Array<string>;
}

/**
 * Auto generated field properties
 */
export interface AutoGeneratedFieldProperties extends FieldProperties {
  /**
   * Never render the field in the UI for generated values
   */
  renderFieldInPDF: false;
}

/**
 * User generated field properties
 *
 * - The user will enter the data, or if the field is allowed to be
 * undefined, a default will be used for the value
 */
export interface UserGeneratedFieldProperties extends FieldProperties {
  renderFieldInPDF: true;
  inputType: React.HTMLInputTypeAttribute;
  minCount?: number;
  maxCount?: number;
  sequence?: number;
}

/**
 * The `default` property will initially look for other field identifiers to prefill the value.
 * If not it will assume the literal, or array of literals will be concatenated with the
 * default `join()` method.
 *
 * @see {UserGeneratedFieldProperties.default}
 */
export interface Fields {
  [fieldIdentifier: string]:
    | UserGeneratedFieldProperties
    | AutoGeneratedFieldProperties;
}

interface FieldCollection {
  title: string;
  fieldIdentifiers: Array<string>;
  minCount?: number;
  maxCount: number;
}

export interface Form {
  collections: Array<FieldCollection>;
  fields: Fields;
  title: string;
}

export const FORM_DATA: Form = {
  collections: [
    {
      fieldIdentifiers: [
        "minor_full_name",
        "minor_birthday",
        "minor_relation_to_user",
      ],
      maxCount: 4,
      title: "Minors, if applicable",
    },
  ],
  fields: {
    date: {
      coordinates: [
        { coordinate: [395, 679], page: 1 },
        { coordinate: [469, 155], page: 4 },
        { coordinate: [469, 99], page: 4 },
        { coordinate: [411, 130], page: 5 },
        { coordinate: [380, 529], page: 6 },
        { coordinate: [448, 489], page: 6 },
        { coordinate: [363, 512], page: 8 },
      ],
      default: [new Date().toLocaleDateString()],
      renderFieldInPDF: false,
    },
    owner_signature: {
      coordinates: [{ coordinate: [135, 155], page: 4 }],
      default: ["Rayvon Solomon"],
      renderFieldInPDF: false,
    },
    full_name: {
      coordinates: [
        { coordinate: [168, 638], page: 1 },
        { coordinate: [92, 225], page: 5 },
        { coordinate: [39, 258], page: 7 },
        { coordinate: [221, 614], page: 8 },
      ],
      inputType: "text",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    age: {
      coordinates: [{ coordinate: [463, 638], page: 1 }],
      inputType: "number",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    location: {
      coordinates: [{ coordinate: [78, 420], page: 2 }],
      default: ["Location unknown"],
      renderFieldInPDF: false,
    },

    signature: {
      coordinates: [
        { coordinate: [135, 99], page: 4 },
        { coordinate: [134, 130], page: 5 },
        { coordinate: [40, 529], page: 6 },
        { coordinate: [38, 489], page: 6 },
        { coordinate: [92, 512], page: 8 },
      ],
      default: ["full_name"],
      renderFieldInPDF: false,
    },
    date_of_birth: {
      coordinates: [
        { coordinate: [349, 225], page: 5 },
        { coordinate: [352, 537], page: 8 },
      ],
      inputType: "date",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    phone_number: {
      coordinates: [
        { coordinate: [473, 225], page: 5 },
        { coordinate: [123, 537], page: 8 },
      ],
      inputType: "tel",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    address: {
      coordinates: [
        { coordinate: [77, 193], page: 5 },
        { coordinate: [82, 588], page: 8 },
      ],
      inputType: "text",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    city: {
      coordinates: [
        { coordinate: [383, 193], page: 5 },
        { coordinate: [61, 563], page: 8 },
      ],
      inputType: "text",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    state: {
      coordinates: [
        { coordinate: [62, 162], page: 5 },
        { coordinate: [264, 563], page: 8 },
      ],
      inputType: "text",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    zip: {
      coordinates: [
        { coordinate: [202, 162], page: 5 },
        { coordinate: [345, 563], page: 8 },
      ],
      inputType: "number",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    email: {
      coordinates: [{ coordinate: [319, 162], page: 5 }],
      inputType: "email",
      renderFieldInPDF: true,
      minCount: 1,
      maxCount: 1,
    },
    concat_all_full_names_of_minors: {
      coordinates: [{ coordinate: [264, 489], page: 6 }],
      default: ["minor_full_name"],
      renderFieldInPDF: false,
    },

    // // First minor choice
    minor_full_name: {
      coordinates: [
        { coordinate: [120, 462], page: 8 },
        { coordinate: [120, 428], page: 8 },
        { coordinate: [120, 392], page: 8 },
        { coordinate: [120, 356], page: 8 },
      ],
      minCount: 1,
      maxCount: 1,
      renderFieldInPDF: true,
      inputType: "text",
    },
    minor_birthday: {
      coordinates: [
        { coordinate: [345, 462], page: 8 },
        { coordinate: [345, 428], page: 8 },
        { coordinate: [345, 392], page: 8 },
        { coordinate: [342, 356], page: 8 },
      ],
      minCount: 1,
      maxCount: 1,
      renderFieldInPDF: true,
      inputType: "text",
    },
    minor_relation_to_user: {
      coordinates: [
        { coordinate: [468, 462], page: 8 },
        { coordinate: [468, 428], page: 8 },
        { coordinate: [468, 392], page: 8 },
        { coordinate: [468, 356], page: 8 },
      ],
      minCount: 1,
      maxCount: 1,
      renderFieldInPDF: true,
      inputType: "text",
    },
  },
  title: "Mr. Wet Jet Liability Waiver",
};
