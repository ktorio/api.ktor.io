---
title: TLSAlertType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls</a> / <a href="./index.html">TLSAlertType</a></div>

# TLSAlertType

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSAlertType</span></code></div>

TLS alert types with codes

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-decryption-failed_-r-e-s-e-r-v-e-d.html">DecryptionFailed_RESERVED</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-close-notify.html">CloseNotify</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unexpected-message.html">UnexpectedMessage</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-bad-record-mac.html">BadRecordMac</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-record-overflow.html">RecordOverflow</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-decompression-failure.html">DecompressionFailure</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-handshake-failure.html">HandshakeFailure</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-certificate_-r-e-s-e-r-v-e-d.html">NoCertificate_RESERVED</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-bad-certificate.html">BadCertificate</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsupported-certificate.html">UnsupportedCertificate</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-certificate-revoked.html">CertificateRevoked</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-certificate-expired.html">CertificateExpired</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-certificate-unknown.html">CertificateUnknown</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-illegal-parameter.html">IllegalParameter</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unknown-ca.html">UnknownCa</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-access-denied.html">AccessDenied</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-decode-error.html">DecodeError</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-decrypt-error.html">DecryptError</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-export-restriction_-r-e-s-e-r-v-e-d.html">ExportRestriction_RESERVED</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-protocol-version.html">ProtocolVersion</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-insufficient-security.html">InsufficientSecurity</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-internal-error.html">InternalError</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-user-canceled.html">UserCanceled</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-renegotiation.html">NoRenegotiation</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsupported-extension.html">UnsupportedExtension</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

numeric alert code


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="by-code.html">byCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.TLSAlertType.Companion$byCode(kotlin.Int)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">TLSAlertType</span></a></code></div>

Find TLS alert instance by it's numeric <a href="by-code.html#io.ktor.network.tls.TLSAlertType.Companion$byCode(kotlin.Int)/code">code</a> or fail


</td>
</tr>
</tbody>
</table>
