---
title: TLSRecord - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls</a> / <a href="./index.html">TLSRecord</a></div>

# TLSRecord

<div class="signature"><code><span class="keyword">class </span><span class="identifier">TLSRecord</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TLSRecord</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.TLSRecord$<init>(io.ktor.network.tls.TLSRecordType, io.ktor.network.tls.TLSVersion, kotlinx.io.core.ByteReadPacket)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../-t-l-s-record-type/index.html"><span class="identifier">TLSRecordType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;TLSRecordType.Handshake<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.TLSRecord$<init>(io.ktor.network.tls.TLSRecordType, io.ktor.network.tls.TLSVersion, kotlinx.io.core.ByteReadPacket)/version">version</span><span class="symbol">:</span>&nbsp;<a href="../-t-l-s-version/index.html"><span class="identifier">TLSVersion</span></a>&nbsp;<span class="symbol">=</span>&nbsp;TLSVersion.TLS12<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.TLSRecord$<init>(io.ktor.network.tls.TLSRecordType, io.ktor.network.tls.TLSVersion, kotlinx.io.core.ByteReadPacket)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span>&nbsp;<span class="symbol">=</span>&nbsp;ByteReadPacket.Empty<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="packet.html">packet</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">packet</span><span class="symbol">: </span><span class="identifier">ByteReadPacket</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="type.html">type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">type</span><span class="symbol">: </span><a href="../-t-l-s-record-type/index.html"><span class="identifier">TLSRecordType</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="version.html">version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">version</span><span class="symbol">: </span><a href="../-t-l-s-version/index.html"><span class="identifier">TLSVersion</span></a></code></div>

</td>
</tr>
</tbody>
</table>
