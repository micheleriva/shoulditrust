# 🤔 Should I Trust

Check if an IP address is safe or not

Highly inspired from [jgamblin](https://github.com/jgamblin) work: [Is this IP bad?](https://github.com/jgamblin/isthisipbad)

# Installation

Install this script globally using yarn:

```bash
$ yarn global add shoulditrust
```

or npm:

```bash
$ npm install -g shoulditrust
```

# Usage

Simply check any valid IP address:

```bash
$ shoulditrust <ip-address> # => 0.0.0.0 is safe.
```

Remember to perform periodically database updates:

```bash
$ shoulditrust --update # or shoulditrust -u
```

# License

[MIT](/LICENSE.md)