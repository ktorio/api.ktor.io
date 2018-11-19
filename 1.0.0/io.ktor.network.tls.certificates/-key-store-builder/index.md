---
title: KeyStoreBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls.certificates</a> / <a href="./index.html">KeyStoreBuilder</a></div>

# KeyStoreBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">KeyStoreBuilder</span></code></div>

Builder for key store

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="certificate.html">certificate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">certificate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates.KeyStoreBuilder$certificate(kotlin.String, kotlin.Function1((io.ktor.network.tls.certificates.CertificateBuilder, kotlin.Unit)))/alias">alias</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates.KeyStoreBuilder$certificate(kotlin.String, kotlin.Function1((io.ktor.network.tls.certificates.CertificateBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-certificate-builder/index.html"><span class="identifier">CertificateBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Generate a certificate and append to the key store.
If there is a certificate with the same <a href="certificate.html#io.ktor.network.tls.certificates.KeyStoreBuilder$certificate(kotlin.String, kotlin.Function1((io.ktor.network.tls.certificates.CertificateBuilder, kotlin.Unit)))/alias">alias</a> then it will be replaced


</td>
</tr>
</tbody>
</table>
