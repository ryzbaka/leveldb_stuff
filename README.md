# LevelDB

## Basics
* Its a embeded key value storage.
* Embedded means its in-process and not a separate service (daemon). Kinda like sqlite.
* npm install level
* Good for kappa architecture and non relational data.
* Kappa architecture focuses on using an immutable data stream as the primary source of record.
* Think of it as a log based, data record. Its useful for p2p systems.
* level methods:
	* `db.put()`
	* `db.get()`
	* `db.del()`
	* `db.batch()`
	* `db.createReadStream()`
* The `counter/` folder contains code for a basic counter demonstrating `.get()` and `.put()` operations.

## Atomicity
* Its important to enforce consistency.
* A set of operations in a "transaction" should either all succeed, or all fail.
* Batches in leveldb are used for enforcing consistency using atomic db operations.
* The `batch.js` file demonstrates the usage of `db.batch()`.

## db.createReadStream
* The `read.js` file demonstrates its use.
* **Note to writer: read up on streams** 
* You can use lexicographic order string comparison operations on the keys:
	* `opts.gte`
	* `opts.gt`
	* `opts.lte`
	* `opts.lt`
	* `opts.limit` : maximum number of records to return 
	* `opts.reverse` : return records in reverse order
* "12" comes before "2" in lexicographic order.

## Organizing Keys
* The `organizing_keys/` folder demonstrates how lexicographic order is used for querying objects. 
* The `posts/` folder contains an example that shows how to use multiple indexing using batch operations to index your records using different fields.

## Subleveldown
* An npm library for creating sub-databases with leveldb.
* The `subleveldown/` folder contains a demo of the library.

## Level Livefeed
* An npm library for working with live data streams (for example, from a websocket) and leveldb.
* The `levelLiveFeed/` folder contains a demo of the library's basic functionality.
