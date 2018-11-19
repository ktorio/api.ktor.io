---
title: io.ktor.http.kotlin.String - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">kotlin.String</a></div>

### Extensions for kotlin.String

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="decode-u-r-l-part.html">decodeURLPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">decodeURLPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/start">start</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/end">end</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;length<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Decode percent encoded URL part within the specified range [<a href="decode-u-r-l-part.html#io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/start">start</a>, <a href="decode-u-r-l-part.html#io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/end">end</a>).
This function is not intended to decode urlencoded forms so it doesn't decode plus character to space.


</td>
</tr>
<tr>
<td markdown="1">

<a href="decode-u-r-l-query-component.html">decodeURLQueryComponent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">decodeURLQueryComponent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLQueryComponent(kotlin.String, kotlin.Int, kotlin.Int, kotlin.Boolean, java.nio.charset.Charset)/start">start</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLQueryComponent(kotlin.String, kotlin.Int, kotlin.Int, kotlin.Boolean, java.nio.charset.Charset)/end">end</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;length<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLQueryComponent(kotlin.String, kotlin.Int, kotlin.Int, kotlin.Boolean, java.nio.charset.Charset)/plusIsSpace">plusIsSpace</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLQueryComponent(kotlin.String, kotlin.Int, kotlin.Int, kotlin.Boolean, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Decode URL query component


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode-o-auth.html">encodeOAuth</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">encodeOAuth</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode <a href="encode-o-auth/-this-.html">this</a> in percent encoding specified here:
https://tools.ietf.org/html/rfc5849#section-3.6


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode-u-r-l-parameter.html">encodeURLParameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">encodeURLParameter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLParameter(kotlin.String, kotlin.Boolean)/spaceToPlus">spaceToPlus</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode <a href="encode-u-r-l-parameter/-this-.html">this</a> as query parameter


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode-u-r-l-path.html">encodeURLPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">encodeURLPath</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode URL path or component. It escapes all illegal or ambiguous characters


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode-u-r-l-query-component.html">encodeURLQueryComponent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">encodeURLQueryComponent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLQueryComponent(kotlin.String, kotlin.Boolean, kotlin.Boolean, java.nio.charset.Charset)/encodeFull">encodeFull</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLQueryComponent(kotlin.String, kotlin.Boolean, kotlin.Boolean, java.nio.charset.Charset)/spaceToPlus">spaceToPlus</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLQueryComponent(kotlin.String, kotlin.Boolean, kotlin.Boolean, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode url part as specified in
https://tools.ietf.org/html/rfc3986#section-2


</td>
</tr>
<tr>
<td markdown="1">

<a href="escape-if-needed.html">escapeIfNeeded</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">escapeIfNeeded</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Escape using double quotes if needed or keep as is if no dangerous strings found


</td>
</tr>
<tr>
<td markdown="1">

<a href="from-http-date-string.html">fromHttpDateString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">fromHttpDateString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ZonedDateTime</span></code></div>

Parse HTTP date to <a href="#">ZonedDateTime</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="from-http-to-gmt-date.html">fromHttpToGmtDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">fromHttpToGmtDate</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

Convert valid http date <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> to <a href="../../io.ktor.util.date/-g-m-t-date/index.html">GMTDate</a>
according to: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date
format: &lt;day-name&gt;{3}, {2} {3} {4} {2}:{2}:{2} GMT
<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> size should be equals 29


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-url-encoded-parameters.html">parseUrlEncodedParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">parseUrlEncodedParameters</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseUrlEncodedParameters(kotlin.String, java.nio.charset.Charset, kotlin.Int)/defaultEncoding">defaultEncoding</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseUrlEncodedParameters(kotlin.String, java.nio.charset.Charset, kotlin.Int)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;1000<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Parse URL query parameters. Shouldn't be used for urlencoded forms because of <code>+</code> character.


</td>
</tr>
<tr>
<td markdown="1">

<a href="quote.html">quote</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">quote</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Escape string using double quotes


</td>
</tr>
</tbody>
</table>
