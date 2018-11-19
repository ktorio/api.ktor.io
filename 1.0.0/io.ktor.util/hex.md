---
title: hex - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.util</a> / <a href="./hex.html">hex</a></div>

# hex

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hex</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$hex(kotlin.String)/s">s</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Decode bytes from HEX string. It should be no spaces and <code>0x</code> prefixes.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hex</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$hex(kotlin.ByteArray)/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode <a href="hex.html#io.ktor.util$hex(kotlin.ByteArray)/bytes">bytes</a> as a HEX string with no spaces, newlines and <code>0x</code> prefixes.

</div>
