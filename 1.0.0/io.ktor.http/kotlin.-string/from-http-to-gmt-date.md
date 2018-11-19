---
title: fromHttpToGmtDate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">kotlin.String</a> / <a href="./from-http-to-gmt-date.html">fromHttpToGmtDate</a></div>

# fromHttpToGmtDate

<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">fromHttpToGmtDate</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

Convert valid http date <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> to <a href="../../io.ktor.util.date/-g-m-t-date/index.html">GMTDate</a>
according to: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date
format: &lt;day-name&gt;{3}, {2} {3} {4} {2}:{2}:{2} GMT
<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> size should be equals 29

Note that only date in GMT(UTC) is valid http date

