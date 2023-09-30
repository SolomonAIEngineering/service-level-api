/**
 * Represents a geographic address.
 *
 * This class provides a structured representation of a physical location, capturing details such as address line, city, state, unit, zipcode, and geo-coordinates.
 * It also has utility methods like `getFullAddress` to fetch a formatted string representation of the address.
 *
 * @example Constructing an `Address`:
 *
 * ```ts
 * // Example data
 * const addressData = {
 *   address: "123 Main St",
 *   city: "Anytown",
 *   state: "CA",
 *   unit: "Apt 4B",
 *   zipcode: "12345",
 *   lattitude: "34.0522",
 *   longitude: "-118.2437",
 *   id: "unique-address-id"
 * };
 *
 * const location = new Address(addressData);
 * console.log(location.getFullAddress()); // Outputs: "123 Main St, Anytown, CA 12345"
 * ```
 *
 * @property address - The main line of the address, typically the street name and number.
 * @property city - The city or municipality of the address.
 * @property state - The state or province of the address.
 * @property unit - Optional unit or apartment number.
 * @property zipcode - The postal code for the address.
 * @property lattitude - The geographic latitude of the address.
 * @property longitude - The geographic longitude of the address.
 * @property id - A unique identifier for the address.
 */
class Address {
  address?: string = '';
  city?: string = '';
  state?: string = '';
  unit?: string = '';
  zipcode?: string = '';
  lattitude?: string = '';
  longitude?: string = '';
  id?: string = '';

  /**
   * Initializes a new instance of the `Address` class.
   * @param [data] - The data used to populate the properties of the class.
   */
  constructor(data?: Partial<Address>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Returns a formatted string of the full address.
   *
   * @example
   * ```ts
   * const location = new Address({address: "123 Main St", city: "Anytown", state: "CA", zipcode: "12345"});
   * console.log(location.getFullAddress()); // Outputs: "123 Main St, Anytown, CA 12345"
   * ```
   *
   * @returns The formatted address string.
   */
  getFullAddress(): string {
    return `${this.address}, ${this.city}, ${this.state} ${this.zipcode}`;
  }
}

export { Address };
